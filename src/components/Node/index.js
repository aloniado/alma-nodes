import React, {Component, useState} from "react";
import NodeIcon from '../../assets/images/node.svg'
import './index.css';
import axios from "axios";

class Node extends Component {
    constructor(props) {
        super(props);
        this.nodeClickHandler = this.nodeClickHandler.bind(this);
        this.updateExtendedChild = this.updateExtendedChild.bind(this)

        // console.log(this.props);

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
                    this.setState(res.data.data, () => {
                        console.log('state after call:', this.state.label, this.state)
                    });
                }
                // this.setState(res.data)
            }).catch((e) => {
            console.log(e)
            alert('error, please refresh to try again')
        })

        this.setState(
            {
                extendedChild: null,
                id: this.props.id,
                url: this.props.url,
                init: true,
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

        //image handler:
        if (this.state.type) {
            console.log('image click!')
            // window.location.href = '/gallery';
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
        // console.log('props:', this.props)
        // console.log('state:', this.state)

        return (
            <div>
                <div className={this.state.type ? 'image-node' : 'folder-node'} onClick={this.nodeClickHandler}>
                    {/*<img src={NodeIcon} className="node-icon"/>*/}
                    <div className={this.state.children ? 'bold' : ''}>
                        O
                    </div>
                </div>

                {
                    this.state.children && ((this.props.headNode && this.state.headExpand) || (this.props.extendedSibling === this.state.id)) &&
                    <div className="level">
                        {/*<div>label: {this.state.label}</div>*/}
                        {
                            this.state.children.map(el => <Node data={el}
                                // level={this.state.level + 1}
                                key={`l${this.state.level}-${el.label}`}
                                id={`l${this.state.level}-${el.label}`}
                                extendedSibling={this.state.extendedChild}
                                updateExtendedChild={this.updateExtendedChild}
                                headNode={false}
                                // siblingImages={this.childrenImages}
                                                                type={el.type}
                                                                url={this.state.url + '/' + el.label}
                                // history={}
                            />)
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Node;