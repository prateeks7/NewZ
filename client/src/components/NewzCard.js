import React, { Component } from 'react';
import { getNews } from '../actions/DataCall.js';
import './NewzCard.css';
import logo from './whiteglobe.gif';
import loader from './loading.svg'



class NewzCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      urlLink: this.props.url,
      loading: false
    };

  }

  componentDidMount() {
    this.setState({ loading: true });
    getNews(this.state.urlLink).then((res) => {
      this.setState({
        data: res.articles
      });
    });
    if(data.length != 0)
    this.setState({ loading: false });
  }
  render() {

    //     return null;
    const { data, loading } = this.state;


    return (
      <div>
        <div className="container-fluid">
          <div className="row">

            {
              loading ?
                <div className="d-flex justify-content-center col-sm-12 col-md-12 col-xl-12 col-xxl-12 mt-5">
                  <img src={loader} alt="Loading" />
                </div>
                :
                data && data.length > 0 && data.map((obj, index) => (
                  <>
                    <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-3 mt-5">
                      <div className="card cardCss">
                        <img className="card-img-top" src={obj.urlToImage == null ? logo : obj.urlToImage} alt="Card image" />
                        <div className="card-body">
                          <h5 className="card-title">{obj.title}</h5>
                          <p className="card-text">{obj.description}</p>
                          <a href={obj.url} target="_blank" className="btn btn-dark">Read More...</a>
                        </div>
                      </div>
                    </div>
                  </>
                )
                )
            }



          </div>
        </div>
      </div>

    );
  }
}

export default NewzCard;