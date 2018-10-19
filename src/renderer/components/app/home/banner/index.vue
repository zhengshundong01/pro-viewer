<template>
    <div style="height: 660px">
        <div class="fd-app-banner-container">
            <vue-particles
                    color="#fff"
                    :particleOpacity="0.7"
                    :particlesNumber="150"
                    shapeType="circle"
                    :particleSize="4"
                    linesColor="#fff"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="2"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                    class="lizi"
            >
            </vue-particles>
            <div class="fd-app-banner-title-wapper">
                <div class="fd-app-banner-title">
                    <div class="container">
                        <h4>I'm Tony Zheng</h4>
                        <h1>Web & Graphic <span class="theme-color">designer</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js" type="text/ecmascript-6"></script>