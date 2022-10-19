<template>
    <div id="appCapsule"> 
        <!-- * Ads -->
        <carousel :items-to-show=".98" :autoplay="3000" :wrap-around="true">
            <slide v-for="slide in slideLink" :key="slide">
                <img class="carousel__item" :src="slide"  alt="ads">
            </slide>       
        </carousel>
        <!-- * Ads -->
        <!-- Portfolio -->
        <div class="section mt-4">
            <div class="section-heading">
                <h2 class="title">My Portfolio</h2>
            </div>
            <div class="card">
                <ul class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                    <!-- item -->
                    <li>
                        <div class="item">
                          <div class="icon-box text-success">
                                <img src="https://asa-list.tinyman.org/assets/226701642/icon.png" width="22" alt="asa icon">
                            </div>
                            <div class="in">
                                <div class="text-center">
                                    <strong>Yieldly </strong>
                                </div>
                                <div>
                                    <strong>2304100.40</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- * item -->
                   <!-- item -->
                    <li>
                        <div class="item">
                            <div class="icon-box text-success">
                                <img src="https://asa-list.tinyman.org/assets/137594422/icon.png" width="22" alt="asa icon">
                            </div>
                            <div class="in">
                                <div class="text-center">
                                    <strong>HEADLINE </strong>
                                </div>
                                <div>
                                    <strong>53.25</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                        <div class="item">
                            <div class="icon-box text-success">
                                <img src="https://asa-list.tinyman.org/assets/287867876/icon.png" width="22" alt="asa icon">
                            </div>
                            <div class="in">
                                <div class="text-center">
                                    <strong>Opulous </strong>
                                </div>
                                <div>
                                    <strong>230.40</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- * item -->
                    <!-- item -->
                    <li>
                          <div class="item">
                            <div class="icon-box text-success">
                                <img src="https://asa-list.tinyman.org/assets/435335235/icon.png" width="22" alt="asa icon">
                            </div>
                            <div class="in">
                                <div class="text-center">
                                    <strong>Crescendo </strong>
                                </div>
                                <div>
                                    <strong>5790.21</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- * item -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide} from 'vue3-carousel'
export default {
     data(){
        return{
            slideLink:["https://notiboy.com/image1.png","https://notiboy.com/image2.png","https://notiboy.com/image3.png"]
        }
    },
    components: {
    Carousel,
    Slide
  }
}
</script>
