import React, {Component} from "react";

// import './index.css';
import axios from "axios";
import { Link } from 'react-router-dom'

class Gallery extends Component {

    constructor(props) {
        super(props);



        this.state = {};

        console.log('image compon construc', props)
        console.log()
    }

    componentDidMount() {
        console.log('mount')
        let imgUrl = window.location.search.replace('?path=', '');

        console.log(imgUrl)
        console.log(window)
        console.log(this.props) // this is Par1)
    }

    render() {
        console.log('image state: ',this.state)
        console.log('image props: ',this.props)
        console.log('image props: ',this.props)


        return (
            <div>a</div>
        )
    }
}

export default Gallery;