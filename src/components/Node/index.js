import React, {Component, useState} from "react";
import NodeIcon from '../../assets/images/node.svg'
import './index.css';
// // import { browserHistory } from 'react-router';
//
// import { Link } from "react-router-dom";

class Node extends Component {
    state = {}
    childrenImages = {}


    constructor(props) {
        super(props);
        this.nodeClickHandler = this.nodeClickHandler.bind(this);
        this.updateExtendedChild = this.updateExtendedChild.bind(this)

        this.state = {
            type: props.data.type,
            children: props.data.children ? props.data.children : null,
            level: props.level,
            // extended: props.extended ? props.extended : false,
            extendedChild: null,
            // extendedSibling: null,
            id:  props.headNode ? 'l0-c0' : props.id,
        }

        if (this.props.headNode) {
            this.state['headExpand'] = false;
        }

        if (this.state.children) {
            for (let i=0; i<this.state.children.length; i++) {
                this.state.children[i].id = `l${this.state.level}-c${i}`;
                if (this.state.children[i].type) {
                    this.childrenImages[this.state.children[i].id] = this.state.children[i].url
                }
            }
            // console.log('>>', this.state.children)
        }

        // if (this.state.level === 0)

    }

    nodeClickHandler() {
        console.log('click. node props:', this.props)

        //head node handler:
        if (this.props.headNode) {
            this.setState({
                headExpand: !this.state.headExpand
            })
            return;
        }

        //image handler:
        if (this.state.type) {
            console.log('image click!')
            console.log(window);
            // window.location.href = '/gallery';


            return;
        }

        //childless node handler:
        if (!this.state.children) {
            console.log('no children')
            return;
        }

        //directory node with children handler
        let status = (this.props.extendedSibling === this.state.id)
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
            console.log('parent id:', this.state.id, 'extendedChild:', this.state.extendedChild)
        })
    }



    render() {
        // console.log('props:',this.props)
        // console.log('state:',this.state)

        return (
            <div>
                <div className={this.state.type ? 'image-node' : 'folder-node'} onClick={this.nodeClickHandler}>
                    {/*<img src={NodeIcon} className="node-icon"/>*/}
                    <div className={this.state.children ? 'bold' : ''}>
                        O
                    </div>
                </div>

                {
                    this.state.children && ((this.props.headNode && this.state.headExpand) || (this.props.extendedSibling === this.state.id)) && <div className="level">
                        <div>level: {this.state.level}</div>
                        {
                            this.state.children.map(el => <Node data={el}
                                                                level={this.state.level + 1}
                                                                key={el.id}
                                                                id={el.id}
                                                                extendedSibling={this.state.extendedChild}
                                                                updateExtendedChild={this.updateExtendedChild}
                                                                headNode={false}
                                                                siblingImages={this.childrenImages}
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