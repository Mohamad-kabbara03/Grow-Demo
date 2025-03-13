import Header from '@/components/Header.vue';
<template>
    <Header />
    <div class="why_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Why Choose <span>Us</span>
                </h2>
            </div>
            <div class="why_container">
                <div class="box" v-for="(item, index) in whyItems" :key="index">
                    <div class="img-box">
                        <img :src="item.image" :alt="item.title" />
                    </div>
                    <div class="detail-box">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="">
                    Read More
                </a>
            </div>
        </div>
    </div>

    <InfoSection />
    <Footer />
</template>

<script>
import Header from "@/components/Header.vue"
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/Footer.vue';

import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";

export default {
    name: "Why",
    components: {
        Header,
        InfoSection,
        Footer
    },
    data() {
        return {
            whyItems: [
                {
                    title: 'Expert Management',
                    image: w1,
                    description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.'
                },
                {
                    title: 'Secure Investment',
                    image: w2,
                    description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.'
                },
                {
                    title: 'Instant Trading',
                    image: w3,
                    description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.'
                },
                {
                    title: 'Happy Customers',
                    image: w4,
                    description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.'
                }
            ]
        };
    }
};
</script>

<style scoped>
.why_section {
    padding: 100px 0;
}

.why_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.box {
    width: 22%;
    margin-bottom: 30px;
}

.img-box {
    width: 100%;
    height: 200px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-box img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.detail-box {
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.detail-box h5 {
    font-weight: 600;
    margin-bottom: 10px;
}

.detail-box p {
    font-size: 14px;
    line-height: 1.6;
    color: #6c757d;
}

.btn-box {
    text-align: center;
    margin-top: 40px;
}

.btn-box a {
    text-decoration: none;
    background-color: #007bff;
    color: white;
    padding: 12px 30px;
    border-radius: 5px;
    font-weight: 600;
}
</style>