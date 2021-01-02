import React, {Component} from "react";
import './index.css';
import axios from "axios";


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let imgUrl = window.location.search.replace('?path=', '');

        let arr = imgUrl.split('/');
        let selectedImageLabel = arr[arr.length - 1];
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
            alert('Error getting ima, please refresh to try again')
            //todo: send to route '/'
        })
    }

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

    render() {
        return (
            <div className={'gallery-container-outer'}>
                <div className={'gallery-container-inner'}>
                    {
                        this.state.selectedImage &&
                        <div>
                            <div className={'primary-image-container'}>
                                <img src={this.state.selectedImage.url} className={'primary-image'} alt=""/>
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

export default Gallery;