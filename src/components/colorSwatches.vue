<template>
    <section>
        <ul>
            <li v-for="swatch in colorSwatches" class="w-fit flex items-center hover:underline cursor-pointer" :key="swatch.color" @click="handleClick(swatch)">
                <svg class="w-12 h-12">
                    <circle cx="25" cy="25" r="16" />
                    <circle cx="25" cy="25" r="15"  :fill="swatch.hexCode" />
                </svg>
                <span>{{ swatch.color }}</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props: {
        colorSwatches: {
            type: Array,
            required: true
        }
    },
    setup(props, { emit }) {
        const handleClick = (swatch) => {
            console.log('emit event');
            emit('swatch-clicked', swatch);
        }
        return { handleClick }
    }
}
</script>