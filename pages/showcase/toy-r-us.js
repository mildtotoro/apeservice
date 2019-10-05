import React from "react";
import Layout from "../../components/layouts/Layout";

const assetPrefix = process.env.NODE_ENV === 'production' ? '/apeservice' : '';

class toyRUs extends React.Component {

    gellery = () => {
        let gallery = "";
        for (let i = 1; i <= 10; i++) {
            const imgPath = assetPrefix + '/static/assets/showcase/toy-r-us/' + i + '.jpg';
            gallery = gallery + <img width="70px" src={imgPath} alt='' />
        }
        console.log({gallery})
        return gallery;
    }

    render() {
        return(
            <Layout>
        <div className="container">
            <div className="row">
                <div className="col py-5">
                    {/* <h2>ตัวอย่างผลงาน</h2> */}
                    <h4>
                        ร้านทอยส์ อาร์ อัส คาร์ฟูพระราม4 ติดตั้งระบบปรับอากาศ และ ระบบท่อส่งลมเย็น
    
                            </h4>
    
                    <h5>รายละเอียดของงาน</h5>
                    <p>
                        คำนวณหาขนาดเครื่องปรับอากาศ และ ออกแบบท่อส่งลมเย็น
                        ติดตั้งท่อน้ำเย็น และ อุปกรณ์วาล์วต่างๆเข้าเครื่องปรับอากาศ ขนาดทำความเย็น 361,000 บีทียู/ชั่วโมง ปริมาณลม 15,000 คิวบิคฟุต/นาที ทั้งหมด 2 เครื่อง
                        ติดตั้งท่อส่งลมเย็นหุ้มฉนวนclose cell ความหนา 3/4” พร้อมทั้งติดตั้งหัวจ่ายลม และ ช่องลมกลับ มูลค่างานทั้งหมด 1,331,178.48 บาท (ก่อนภาษีมูลค่าเพิ่ม)
                            </p>
                    <div className="brand">
                        {this.gellery()}
                        {/* <img width="70px" src={assetPrefix + '/static/assets/showcase/toy-r-us/' + index + '.png'} alt={'apeservice partner' + product.brand} /> */}
                    </div>
    
                </div>
            </div>
        </div>
            </Layout >
        );
    }
}

 export default toyRUs;
