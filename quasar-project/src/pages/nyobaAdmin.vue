<template>
    <section id="hero">
        <h1>Sejarah Keraton</h1>
    </section>

    <div class="popup">
        <table>
            <tr>
                <td><label for="">Title</label></td>
                <td><input type="text"></td>
                <td><label for="" class="size">Size</label></td>
                <td> <input type="number" name="" id=""></td>
            </tr>
            <tr>
                <td><label for="">Subtitle</label></td>
                <td><input type="text"></td>
                <td><label for="" class="size">Size</label></td>
                <td> <input type="number" name="" id=""></td>
            </tr>
            <tr>
                <td><label for="">Gambar</label></td>
                <td><input type="file"></td>
            </tr>
        </table>
    </div>
</template>
<style scoped>
    #hero{
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-image: url("/src/assets/images/agung.png");
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .popup{
        width: 30%;
        height: 50%;
        background-color: #b6b6b6;
        padding: 20px;
        line-height: 28px;
        border-radius: 10px;
        position: absolute;
        top: 25%;
        align-items: center;
        justify-content: center;
        left: 35%;
        transform: translate(-50% 50%);
        display: table-column;
        gap: -20px;
    } 
    input[type = number]{
        width: 39px;
        margin-left: -100px;
    }
    .size{
        margin-left: -135px;
   
    }

</style>