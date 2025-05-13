<script setup>
import { axios } from 'vue';

import { ref, onMounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>



<style scoped>
   ul{
        padding: 0;
        list-style: none;
    }

    li{
        background-color: white;
        padding: 12px 16px;
        margin-bottom: 10px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    button{
        margin-left: 10px;
        padding: 8px 12px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        transition: 0.3s;
    }

    button:hover{
        transform: scale(1.05);
    }

    button:first-of-type{
        background-color: #2196f3;
        color: white;
    }

    button:first-of-type:hover{
        background-color: #1976d2;
    }

    button:last-of-type{
        background-color: #f44336;
        color: white;
    }

    button:last-of-type:hover{
        background-color: #d32f2f;
    }

</style>