<template>
    <div class="btn" :class="classes" @click="click">
        <span>{{span}}</span>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: "button",
        props: {
            className: {
                type: String,
                default: ""
            },
            text: {
                type: String,
                default: "文字"
            }
        },
        data () {
            return {
                classes: this.className,
                span: this.text
            }
        },
        methods: {
            click () {
                this.email("click")
            }
        }
    }
</script>
<style lang="less">
    .btn{
        color: #fff;
        font-size: 12px;
        text-transform: uppercase;
        line-height: 48px;
        background: #44b272;
        border-radius: 4px;
        height:48px;
        letter-spacing: .2em;
        padding: 0% 30px;
        display: inline-block;
        margin: 20px 20px 10px 0;
        font-weight: 700;
        cursor: pointer;
    }
</style>