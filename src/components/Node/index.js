import React, {Component, useState} from "react";
import NodeIcon from '../../assets/images/node.svg'
import './index.css';
import axios from "axios";
import { Link } from 'react-router-dom'

class Node extends Component {

    constructor(props, history) {
        super(props);

        this.nodeClickHandler = this.nodeClickHandler.bind(this);
        this.updateExtendedChild = this.updateExtendedChild.bind(this)

        this.state = {
            type: this.props.type,
            label: this.props.label ? this.props.label : null,
            children: [],
            url: this.props.url,
            headExpand: false
        }
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

                console.log(res)
                if (res.status === 201) {
                    this.setState(res.data.data);
                    this.setState({
                        init: true
                    })
                }
                // this.setState(res.data)
            }).catch((e) => {
            this.setState({
                init: false
            })
            console.log(e)
            alert('error, please refresh to try again')
        })

        this.setState(
            {
                extendedChild: null,
                id: this.props.id,
            }, () => {
                console.log('after init: ', this.state)
            }
        )
    }

    async nodeClickHandler() {
        //init node if no data yet:
        if (!this.state.init) {
            await this.initNode();
        }

        //head node handler:
        if (this.props.headNode) {
            console.log('head')
            this.setState({
                headExpand: !this.state.headExpand
            }, () => {
                console.log(this.state)
            })
            return;
        }

        //directory node with children handler
        let status = (this.props.extendedSibling === this.state.id)

        console.log('!!!', this.state)
        this.props.updateExtendedChild(this.state.id, status);
    }

    updateExtendedChild(id, status) {
        console.log('child event', id, status);

        let value = id;
        if (id === this.state.extendedChild) {
            value = null
        }

        this.setState({
            extendedChild: value
        }, () => {
            console.log('parent label:', this.state.label, 'extendedChild:', this.state.extendedChild)
        })
    }


    render() {
        // if (this.state.type === 1) {
        //     console.log('IMAGE', this.props.url)
        //     console.log('props:', this.props)
        //     console.log('state:', this.state)
        // }
        // console.log('props:', this.props)
        // console.log('state:', this.state)

        return (

            <div>
                {
                    this.state.type === 0 &&
                    <div className={'folder-node'} onClick={this.nodeClickHandler}>
                        <div>
                            [*]
                        </div>
                    </div>
                }
                {
                    this.state.type === 1 &&
                    <div className={'image-node'}>
                        <Link
                            to={'/picture?path='+this.props.url.split('?path=')[1]} params={{ testvalue: "hello" }}
                        >[*]</Link>
                    </div>
                }

                {
                    this.state.children && ((this.props.headNode && this.state.headExpand) || (this.props.extendedSibling === this.state.id)) &&
                    <div className="level">
                        {/*<div>label: {this.state.label}</div>*/}
                        {
                            this.state.children.map(el => <Node data={el}
                                                                key={`l${this.state.level}-${el.label}`}
                                                                id={`l${this.state.level}-${el.label}`}
                                                                extendedSibling={this.state.extendedChild}
                                                                updateExtendedChild={this.updateExtendedChild}
                                                                headNode={false}
                                                                type={el.type}
                                                                url={this.state.url + '/' + el.label}
                                                                // imageUrl={this.props.data && this.props.data.url ? this.props.data.url : null}
                            />)
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Node;