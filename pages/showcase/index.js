import React from "react";
import Layout from "../../components/layouts/Layout";
import showcase1 from '../../assets/images/showcase/toy-r-us.jpg';
import showcase2 from '../../assets/images/showcase/packpro.jpg';
import showcase3 from '../../assets/images/showcase/rama-garden-hotel.jpg';
import showcase4 from '../../assets/images/showcase/amorn-house.jpg';
import showcase5 from '../../assets/images/showcase/cyberpax.jpg';
import showcase6 from '../../assets/images/showcase/bangkok-solar.jpg';
import showcase7 from '../../assets/images/showcase/thai-energy-conserration.jpg';
import showcase8 from '../../assets/images/showcase/kasetsart-university-sriracha.jpg';
import showcase9 from '../../assets/images/showcase/engai.jpg';
import showcase10 from '../../assets/images/showcase/fajeeb.jpg';
import showcase11 from '../../assets/images/showcase/ns-electronic.jpg';
import showcase12 from '../../assets/images/showcase/cp-petrochem.jpg';
import Link from 'next/link';

const showcaseList = [
  {
    linkName: 'toy-r-us',
    image: showcase1,
    title: 'ร้านทอยส์ อาร์ อัส คาร์ฟูพระราม4',
    subtitle: 'ระบบปรับอากาศ และ ระบบท่าส่งลมเย็น'
  },
  {
    linkName: 'packpro',
    image: showcase2,
    title: 'บริษัท แพ็กโปร จำกัด',
    subtitle: 'ระบบปรับอากาศแบบ Split Duct Type'
  },
  {
    linkName: 'rama-garden-hotel',
    image: showcase3,
    title: 'โรงแรมรามาการ์เด้นท์',
    subtitle: 'ระบบปรับอากาศแบบ Service and Maintenance'
  },
  {
    linkName: 'amorn-house',
    image: showcase4,
    title: 'บ้านพักอาศัย คุณอมร เตชะหรูวิจิตร',
    subtitle: 'ระบบปรับอากาศแบบ Split Type'
  },
  {
    linkName: 'cyberpax',
    image: showcase5,
    title: 'CYBERPAX',
    subtitle: 'ระบบปรับอากาศแบบ Water Cooler Chiller'
  },
  {
    linkName: 'bangkok-solar',
    image: showcase6,
    title: 'บางกอกโซล่าร์',
    subtitle: 'ระบบปรับอากาศแบบ Air Cooled Chiller'
  },
  {
    linkName: 'thai-energy-conserration',
    image: showcase7,
    title: 'Thai Energy Conserration',
    subtitle: 'ระบบปรับอากาศแบบ Water Cooler Chiller'
  },
  {
    linkName: 'kasetsart-university-sriracha',
    image: showcase8,
    title: 'มหาวิทยาลัย เกษตรศาสตร์ วิทยาเขตศรีราชา',
    subtitle: 'ระบบปรับอากาศ และ ระบายอากาศ'
  },
  {
    linkName: 'engai',
    image: showcase9,
    title: 'บริษัท เอ็นไก ไทย จำกัด',
    subtitle: 'ระบบแอร์คอมเพรสเซอร์ และ ระบบแอร์ดรายเออร์'
  },
  {
    linkName: 'fajeeb',
    image: showcase10,
    title: 'บริษัท ฝาจีบ จำกัด (มหาชน)',
    subtitle: 'ระบบดูดกลิ่น และ กรองกลิ่น ของแผนกพิมพ์'
  },
  {
    linkName: 'ns-electronic',
    image: showcase11,
    title: 'บริษัท เอ็น เอส อีเลคโทรนิค จำกัด',
    subtitle: 'ระบบปรับอากาศ และ แสงสว่าง สำหรับห้อง Clean Room'
  },
  {
    linkName: 'cp-petrochem',
    image: showcase12,
    title: 'บริษัทเจริญโภคภัณฑ์ ปิโตรเคมี (มหาชน) จำกัด',
    subtitle: 'ระบบปรับอากาศ และ ระบบส่งน้ำเย็น'
  },
]

export default function showCase() {

  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h2 className="py-4">ตัวอย่างผลงาน</h2>
            <div className="row">
              {showcaseList.map((project) => {
                return [
                  <div className="col-12 col-md-6 col-lg-4">
                    <Link href={`/showcase/${project.linkName}`}>
                      <a className="card mb-3">
                        <img src={project.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title"> {project.title}</h5>
                          <p className="card-text">{project.subtitle}</p>
                          <div className="card-text text-right">
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ]
              })}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}
