import React, {Component} from "react";
import './index.css';
import axios from "axios";
import {Link} from 'react-router-dom'
import {BsFillCircleFill} from "react-icons/bs";

class Node extends Component {

    constructor(props) {
        super(props);

        this.nodeClickHandler = this.nodeClickHandler.bind(this);
        this.updateExtendedChild = this.updateExtendedChild.bind(this)

        this.state = {
            type: this.props.type,
            label: this.props.label ? this.props.label : null,
            children: [],
            url: this.props.url,
            headExpand: false,
            init: false,
            position: props.position ? props.position : {
                siblingCount: 1,
                siblingPosition: 1,
                level: this.props.level
            }
        }

        this.calculatePosition();
    }

    initNode() {
        let config = {
            headers: {
                'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456',
            }
        }
        let url = this.props.url

        axios.get(url, config)
            .then((res) => {

                if (res.status === 201) {
                    this.setState(res.data.data);
                    this.setState({
                        init: true
                    })
                }
            }).catch((e) => {
            this.setState({
                headExpand: false
            })
            alert('Error, try again')
        })

        this.setState(
            {
                extendedChild: null,
                id: this.props.id,
            })


    }

    async nodeClickHandler() {
        console.log(this.state);
        //init node if no data yet:
        if (!this.state.init) {
            await this.initNode();
        }

        //head node handler:
        if (this.props.headNode) {
            this.setState({
                headExpand: !this.state.headExpand
            })
            return;
        }

        //directory node with children handler
        let status = (this.props.extendedSibling === this.state.id)
        this.props.updateExtendedChild(this.state.id, status);
    }

    updateExtendedChild(id, status) {
        // console.log('child event', id, status);

        let value = id;
        if (id === this.state.extendedChild) {
            value = null
        }

        this.setState({
            extendedChild: value
        })
    }

    calculatePosition() {
        // console.log(this.state.position)
        let position = this.state.position

        let angle = (90 / (position.siblingCount * 2));
        position.rotation = Math.round(angle + angle * 2 * position.siblingPosition);
        position.level = this.props.position && this.props.position.level ? this.props.position.level : 0

        console.log('calculating', position)

        this.setState({
            position: position
        }, () => {
            console.log(this.state.label, this.state.position)
        })
    }

    render() {
        // const transform = {transform: [{rotate: this.state.position.rotation + 'deg'}]}
        return (
            <div>
                <div className={'node-container'} style={{}}>
                {
                    this.state.type === 0 &&
                    <div className={'folder-node node-icon'} onClick={this.nodeClickHandler}>
                        <BsFillCircleFill/>
                    </div>
                }
                {
                    this.state.type === 1 &&
                    <div className={'image-node node-icon'}>
                        <Link
                            to={'/picture?path=' + this.props.url.split('?path=')[1]}
                            style={{color: 'inherit', textDecoration: 'inherit'}}>
                            <BsFillCircleFill/>
                        </Link>
                    </div>
                }
                </div>

                {
                    this.state.children && ((this.props.headNode && this.state.headExpand) || (this.props.extendedSibling === this.state.id)) &&
                    <div className="level">
                        {
                            this.state.children.map((el, i) => <Node data={el}
                                                                     key={`l${this.state.level}-${i}`}
                                                                     id={`l${this.state.level}-${i}`}
                                                                     extendedSibling={this.state.extendedChild}
                                                                     updateExtendedChild={this.updateExtendedChild}
                                                                     headNode={false}
                                                                     type={el.type}
                                                                     url={this.state.url + '/' + el.label}
                                                                     position={{
                                                                         siblingCount: this.state.children.length,
                                                                         siblingPosition: i,
                                                                         level: this.state.position.level + 1
                                                                     }}

                            />)
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Node;