import React from "react";
import Layout from "../../components/layouts/Layout";
import ShowCase from "../../components/layouts/ShowCase";

class RamaGardenHotel extends React.Component {
    render() {
        return (
            <Layout>
                <ShowCase
                    projectFolderName="rama-garden-hotel"
                    imgLength="10"
                    projectName="Rama Garden Hotel"
                    subtitle="ระบบปรับอากาศแบบ Service and Maintenance"
                    content="โรงแรมวิภาวดีรังสิต โฮเต็ล จำกัด เป็นโรงแรมที่เปิดให้บริการมานาน มีผู้มารับบริการตลอดทั้งปี ทางบริษัทฯ ของเราได้มีบทบาทในการให้บริการและงานซ่อมบำรุง ซึ่งเป็นเรื่องที่ละเอียดอ่อนมาก เพราะโรงแรมมีการเปิดบริการตลอด 24 ชั่วโมง และการบริการและงานซ่อมบำรุงจะต้องมีการใช้เสียงดัง ซึ่งจะเป็นการรบกวนแขกในช่วงเวลาที่แขกต้องการพักผ่อนหรือต้องการความเป็นส่วนตัว แต่ ทางบริษัทของเราสามารถให้บริการกับทางโรงแรมฯได้โดยการส่งช่างผู้ชำนาญการไป ให้บริการและงานซ่อมบำรุงโดยไม่กระทบการต่อการให้บริการของทางโรงแรมฯ และนี่เป็นอีกทางเลือกหนึ่งที่ทางโรงแรมฯเลือกใช้บริการ และให้ความไว้วางใจในการใช้บริการกับทางบริษัทฯของเราเสมอมา"
                />
            </Layout >
        );
    }
}

export default RamaGardenHotel;
