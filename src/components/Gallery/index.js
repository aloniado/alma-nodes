import React, {Component} from "react";
import './index.css';
import axios from "axios";
import {withRouter} from 'react-router-dom';

import { BiExpand } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";

class Gallery extends Component {
    constructor(props, history) {
        super(props);

        this.state = {
            expand: false
        };
    }

    /**
     * initializing component:
     * getting data, etc.
     */
    componentDidMount() {
        let imgUrl = window.location.search.replace('?path=', '');

        if (!imgUrl) {
            alert('Url error, going back home.')
            this.props.history.push('/')
            return;
        }

        let arr = imgUrl.split('/');
        let selectedImageLabel = arr[arr.length - 1];

        if (!selectedImageLabel) {
            alert('Url error, going back home.')
            this.props.history.push('/')
            return;
        }
        arr.pop();

        let url = 'http://18.203.83.17/public/explorePictures?path=' + arr.join('/');
        let config = {
            headers: {
                'X-TOKEN': '2d4e69f4823176197ccf41caa5ee6456',
            }
        }

        axios.get(url, config)
            .then((res) => {
                if (res.status === 201) {
                    let images = []

                    for (let i = 0; i < res.data.data.children.length; i++) {
                        if (res.data.data.children[i].type === 1) {
                            images.push(res.data.data.children[i])
                        }
                        if (res.data.data.children[i].label === selectedImageLabel) {
                            this.setState({selectedImage: res.data.data.children[i]})
                            images.pop();
                        }
                    }
                    this.setState({images: images});
                }
            }).catch((e) => {
            alert('Error getting image, going back home.')
            this.props.history.push('/')
        })
    }

    /**
     * sets selected image primary
     * pushes primary image to secondary images array
     * @param label
     */
    setImageAsPrimary(label) {
        let images = this.state.images;

        for (let i = 0; i < images.length; i++) {
            if (images[i].label === label) {
                let image = images[i];

                images.splice(i, 1);
                images.push(this.state.selectedImage);

                this.setState({
                    selectedImage: image,
                    images: images
                })
                return;
            }
        }
    }

    /**
     * type of displaying main image: fit / original
     */
    toggleExpand() {
        let expand = this.state.expand
        this.setState({expand: !expand})
    }

    render() {
        return (

            <div className={'gallery-container-outer'}>
                <div className={'gallery-container-inner'}>
                    {
                        this.state.selectedImage &&
                        <div>
                            <div className={'primary-image-container'}>
                                <img src={this.state.selectedImage.url} className={this.state.expand ? '' : 'primary-image'} alt=""/>
                            </div>
                            <div onClick={this.toggleExpand.bind(this)} >
                                {this.state.expand}
                                <BiExpand className={this.state.expand ? 'show expand-container' : 'hide'} />
                                <BiCollapse className={this.state.expand ? 'hide' : 'show expand-container'}/>
                            </div>
                        </div>
                    }
                    {
                        this.state.images &&
                        <div>
                            <div className={'grid-container'}>
                                {
                                    this.state.images.map(el => <div key={el.label} className={'grid-item'}>
                                        <img src={el.url}
                                             className={'secondary-img'}
                                             alt=""
                                             onClick={() => this.setImageAsPrimary(el.label)}/>
                                    </div>)
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Gallery);