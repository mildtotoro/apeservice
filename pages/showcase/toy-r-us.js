import React from "react";
import Layout from "../../components/layouts/Layout";

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class toyRUs extends React.Component {

    gellery = () => {
        let gallery = [];
        for (let i = 1; i <= 10; i++) {
            const imgPath = assetPrefix + '/static/assets/showcase/toy-r-us/' + i + '.jpg';
            gallery.push(<div className="col-12 col-md-6 col-lg-4"><img className="img-fluid" key={imgPath} src={imgPath} alt='' /></div>);
        }
        console.log({ gallery })
        return gallery;
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <h3>
                                ร้านทอยส์ อาร์ อัส คาร์ฟูพระราม4
                            </h3>
                            <h4 className="mt-2">ติดตั้งระบบปรับอากาศ และ ระบบท่อส่งลมเย็น</h4>
                            <p className="mt-3">
                                คำนวณหาขนาดเครื่องปรับอากาศ และ ออกแบบท่อส่งลมเย็น
                                ติดตั้งท่อน้ำเย็น และ อุปกรณ์วาล์วต่างๆเข้าเครื่องปรับอากาศ ขนาดทำความเย็น 361,000 บีทียู/ชั่วโมง ปริมาณลม 15,000 คิวบิคฟุต/นาที ทั้งหมด 2 เครื่อง
                                ติดตั้งท่อส่งลมเย็นหุ้มฉนวนclose cell ความหนา 3/4” พร้อมทั้งติดตั้งหัวจ่ายลม และ ช่องลมกลับ มูลค่างานทั้งหมด 1,331,178.48 บาท (ก่อนภาษีมูลค่าเพิ่ม)
                            </p>
                            <div className="row no-gutters">
                                {this.gellery()}
                            </div>

                        </div>
                    </div>
                </div>
            </Layout >
        );
    }
}

export default toyRUs;
