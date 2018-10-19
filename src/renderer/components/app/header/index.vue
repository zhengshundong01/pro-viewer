<template>
    <div class="fd-app-header-container">
        <div class="container">
            <div class="fd-header-logo">logo</div>
            <ul class="fd-header-menu">
                <li class="fd-menu-item" v-for="(item, index) in menuData" :key="index">
                    <a href="#">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script src="./index.js" type="text/ecmascript-6"></script>