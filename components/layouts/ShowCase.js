import React from "react";
import Slider from "react-slick";

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class ShowCase extends React.Component {
    constructor(props) {
        super(props);

    }
    gellery = () => {
        const { projectFolderName, imgLength } = this.props;

        // let gallery = [];
        let gallery = [];
        for (let i = 1; i <= imgLength; i++) {
            const imgPath = assetPrefix + `/static/assets/showcase/${projectFolderName}/` + i + '.jpg';

            gallery.push({

                imgPath
            })
            // gallery.push(<div key={"showcase" + projectFolderName} className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>);
            // gallery = <div key={"showcase" + projectFolderName} className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>;
        }
        // console.log({ gallery })
        return gallery;
    }

    render() {
        const settings = {
            // className: "center",
            dots: true,
            variableWidth: true,
            infinite: true,
            // centerPadding: "0px",
            // slidesToShow: 3,
            speed: 300,
            autoplay: true,
            arrows: false,
            // slidesToScroll: 3
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: false,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        variableWidth: false,
                        arrows: false,
                        centerMode: false,
                        // centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        const { projectName, subtitle, content, projectFolderName, imgLength } = this.props;

        let gallery = [];
        for (let i = 1; i <= imgLength; i++) {
            const imgPath = assetPrefix + `/static/assets/showcase/${projectFolderName}/` + i + '.jpg';
            gallery.push(imgPath)
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <h3>
                                {projectName}
                            </h3>
                            <h4 className="mt-2">{subtitle}</h4>
                            <p className="mt-3">
                                {content}
                                {this.props.children}
                            </p>


                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mb-5 px-0">
                            {gallery.length > 0 ?
                                <Slider {...settings}>
                                    {gallery.map(img => {

                                        return <div key={"showcase" + img} className="border text-center">
                                            <img style={{ maxHeight: '300px' }} key={img} src={img} alt={projectFolderName} />
                                        </div>
                                    })}
                                </Slider>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCase;
