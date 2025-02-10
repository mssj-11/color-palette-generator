<template>
    <div class="preview">
        <h2>Vista Previa</h2>
        <div class="web-preview">
            <div 
                v-for="(color, index) in palette"
                :key="index"
                class="preview-box"
                :style="{ backgroundColor: color }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['palette'],
};
</script>

<style scoped>
.preview {
    margin-top: 30px;
}

.web-preview {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.preview-box {
    width: 300px;
    height: 200px;
}
</style>