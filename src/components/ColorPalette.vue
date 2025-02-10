<template>
    <div class="palette">
        <div class="colors">
            <div
                v-for="(color, index) in palette"
                :key="index"
                class="color-box"
                :style="{ backgroundColor: color }"
            >
                <p>{{ color }}</p>
                <button @click="copyToClipboard(color)">Copiar</button>
            </div>
        </div>

        <div class="actions">
            <button @click="generatePalette">Generar Paleta</button>
            <select v-model="scheme" @change="generatePalette">
                <option value="random">Aleatoria</option>
                <option value="monochromatic">Monocromática</option>
                <option value="analogous">Análoga</option>
            </select>
        </div>
    </div>
</template>

<script>
import { generateColors } from '@/utils/colorSchemes';

export default {
    data() {
        return {
            palette: [],
            scheme: 'random',
        };
    },
    methods: {
        generatePalette() {
            this.palette = generateColors(this.scheme);
            this.$emit('paletteUpdate', this.palette);
        },
        async copyToClipboard(color) {
            try {
                await navigator.clipboard.writeText(color);
                alert(`Color copiado: ${color} !`);
            } catch (e) {
                alert('Error al copiar el color al portapapeles.');
            }
        },
    },
    mounted() {
        this.generatePalette();
    },
};
</script>

<style scoped>
.palette {
    text-align: center;
}

.colors {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.color-box {
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;/*
    border-radius: 50%;
    cursor: pointer;*/
    color: white;
    font-weight: bold;
    position: relative;
}

.color-box button {
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    background-color: #333;
    color: #fff;
    padding: 5px 12px;
    border: 2px solid #333;
}

.actions {
    margin-top: 20px;
}

.actions button {
    padding: 7px 15px;
    margin-right: 5px;
    background-color: #333;
    color: #fff;
    border: 2px solid #333;
}
.actions select {
    padding: 7px 15px;
}
</style>