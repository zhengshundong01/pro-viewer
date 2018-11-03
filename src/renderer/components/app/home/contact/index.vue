<template>
    <div class="fd-app-contact-container">
        <div class="container">
            <div class="fd-app-contact-title">
                <h2 class="fd-app-contact-text1">Get in tuch with me</h2>
                <span class="fd-app-contact-text2">Contact</span>
            </div>
            <div class="fd-app-contact-form">
                <div class="row">
                    <div class="fd-app-contact-form-row1">
                        <input type="text" class="input" placeholder="Name">
                        <div></div>
                    </div>
                    <div class="fd-app-contact-form-row1">
                        <input type="email" class="input" placeholder="Email">
                        <div></div>
                    </div>
                </div>
                <div class="row">
                    <div class="fd-app-contact-form-row2">
                        <input type="text" class="input" placeholder="Subject">
                    </div>
                </div>
                <div class="row">
                    <div class="fd-app-contact-form-row2">
                        <textarea rows="7" class="input" placeholder="Message"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="fd-app-contact-form-row3">
                        <btn :text="'send'"></btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js" type="text/ecmascript-6"></script>