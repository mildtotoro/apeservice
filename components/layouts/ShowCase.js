import React from "react";

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class ShowCase extends React.Component {
    constructor(props) {
        super(props);

    }
    gellery = () => {
        const { projectFolderName, imgLength } = this.props;

        let gallery = [];
        for (let i = 1; i <= imgLength; i++) {
            const imgPath = assetPrefix + `/static/assets/showcase/${projectFolderName}/` + i + '.jpg';
            gallery.push(<div className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>);
        }
        console.log({ gallery })
        return gallery;
    }

    render() {
        const { projectName, subtitle, content } = this.props;
        return (
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
                        <div className="row no-gutters">
                            {this.gellery()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCase;
