<!-- eslint-disable -->
<template>
    <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-1.09375s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(45 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.9375s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(90 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.78125s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(135 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.625s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(180 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.46875s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(225 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.3125s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(270 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="-0.15625s" repeatCount="indefinite"></animate>
            </rect>
        </g>
        <g transform="rotate(315 50 50)">
            <rect :fill="color" x="42.5" y="8.5" rx="7.5" ry="7.5" width="15" height="15">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.25s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'MnLoadSpinner',
    props: {
        color: {
            type: String,
            default() {
                return '#000000';
            }
        },
        size: {
            type: String,
            default() {
                return '20px';
            }
        }
    }
};
</script>

<style scoped>
    .button-position {
        position: absolute;
        left: 12px;
    }
</style>
