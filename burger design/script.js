document.addEventListener('DOMContentLoaded', () => {
    let images_dt = [
        {
            title: "THE CHICKEN \n BURGER",
            price: "₹229",
            MRP: "₹249",
            calorie: 600,
            fat: 35,
            protein: 30
        },
        {
            title: "THE PINK \n BURGER",
            price: "₹199",
            MRP: "₹229",
            calorie: 500,
            fat: 38,
            protein: 26
        },
        {
            title:"THE BLACK \n BURGER",
            price:"₹209",
            MRP:"239",
            calorie:450,
            fat:39,
            protein:36
        },
        {
            title:"THE RED \n BURGER",
            price:"₹199",
            MRP:"239",
            calorie:500,
            fat:31,
            protein:26
        },
        {
            title:"THE GREEN \n BURGER",
            price:"₹179",
            MRP:"219",
            calorie:520,
            fat:38,
            protein:22
        },
        {
            title:"THE TORNADO \n BURGER ",
            price:"₹259",
            MRP:"299",
            calorie:450,
            fat:32,
            protein:26
        },
        {
            title:"THE COMBO \n BURGER",
            price:"₹299",
            MRP:"339",
            calorie:500,
            fat:39,
            protein:33
        }
        
    ];

    let index = 0;
    const len = document.querySelectorAll('.main_imgs').length * 310;

    const icon_off = () => {
        Array.from(document.querySelectorAll('.pagi_img')).forEach((el) => {
            el.style.transform = "unset";
            el.style.opacity = ".3";
        });
    };

    document.querySelector('.bi-chevron-right').addEventListener('click', () => {
        const maxIndex = len - 310;
        if (index < maxIndex) {
            index += 310;
        } else {
            index = 0;
        }
        document.querySelector('.images').scrollLeft = index;

        // Apply the blur effect to all main images before removing it from the selected main image
        Array.from(document.querySelectorAll('.main_imgs')).forEach((el) => {
            el.style.width = "35%";
            el.style.filter = "blur(2px)";
        });

        // Remove the blur effect from the selected main image
        document.querySelector('.main_imgs:nth-child(' + (index / 310 + 1) + ')').style.filter = "none";

        // Update the title, price, and other content as needed
        document.querySelector('.title').innerHTML = images_dt[index / 310].title;
        document.querySelector('.price').innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;

        // Update the calorie, fat, and protein details
        updateNutritionDetails(index);

        // Update the pagination image styles
        icon_off();
        document.querySelector('.pagi_img:nth-child(' + (index / 310 + 1) + ')').style.transform = "scale(1)";
        document.querySelector('.pagi_img:nth-child(' + (index / 310 + 1) + ')').style.opacity = 1;
    });

    document.querySelector('.bi-chevron-left').addEventListener('click', () => {
        index -= 310;
        if (index < 0) {
            index = 0;
        }
        document.querySelector('.images').scrollLeft = index;

        // Apply the blur effect to all main images before removing it from the selected main image
        Array.from(document.querySelectorAll('.main_imgs')).forEach((el) => {
            el.style.width = "37%";
            el.style.filter = "blur(1.5px)";
        });

        // Remove the blur effect from the selected main image
        document.querySelector('.main_imgs:nth-child(' + (index / 310 + 1) + ')').style.filter = "none";

        // Update the title, price, and other content as needed
        document.querySelector('.title').innerHTML = images_dt[index / 310].title;
        document.querySelector('.price').innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;

        // Update the calorie, fat, and protein details
        updateNutritionDetails(index);

        // Update the pagination image styles
        icon_off();
        document.querySelector('.pagi_img:nth-child(' + (index / 310 + 1) + ')').style.transform = "scale(1)";
        document.querySelector('.pagi_img:nth-child(' + (index / 310 + 1) + ')').style.opacity = 1;
    });

    document.querySelectorAll('.pagi_img').forEach((el, i) => {
        el.addEventListener('click', () => {
            index = 310 * i;
            document.querySelector('.images').scrollLeft = index;

            // Apply the blur effect to all main images before removing it from the selected main image
            Array.from(document.querySelectorAll('.main_imgs')).forEach((el) => {
                el.style.width = "35%";
                el.style.filter = "blur(1.5px)";
            });

            // Remove the blur effect from the selected main image
            document.querySelector('.main_imgs:nth-child(' + (index / 310 + 1) + ')').style.filter = "none";

            // Update the title, price, and other content as needed
            document.querySelector('.title').innerHTML = images_dt[index / 310].title;
            document.querySelector('.price').innerHTML = `${images_dt[index / 310].price}<sup><del>${images_dt[index / 310].MRP}</del></sup>`;

            // Update the calorie, fat, and protein details
            updateNutritionDetails(index);

            // Update the pagination image styles
            icon_off();
            el.style.transform = "scale(1.1)";
            el.style.opacity = 1;
        });
    });

    function updateNutritionDetails(index) {
        const imageDetails = images_dt[index / 310]; // Get the image details for the current image

        // Update the calorie, fat, and protein details
        document.querySelector('#calorie').innerHTML = imageDetails.calorie;
        document.querySelector('#Fat').innerHTML = imageDetails.fat;
        document.querySelector('#protein').innerHTML = imageDetails.protein;
    }
});
