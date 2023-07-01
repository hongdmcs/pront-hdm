const categories = document.getElementsByName('category');
const spiciness = document.getElementsByName('spicy');
const recommendBtn = document.getElementById('recommend-btn');
const resultDiv = document.getElementById('result');

recommendBtn.addEventListener('click', () => {
    const selectedCategories = Array.from(categories)
        .filter(category => category.checked)
        .map(category => category.value);

    const selectedSpiciness = Array.from(spiciness)
        .filter(spicy => spicy.checked)
        .map(spicy => spicy.value);

    if (selectedCategories.length === 0 || selectedSpiciness.length === 0) {
        resultDiv.textContent = '종류또는 맵기를 선택해주세요.';
    } else {
        const category = getRandomElement(selectedCategories);
        const spice = getRandomElement(selectedSpiciness);
        const food = getRandomFood(category, spice);
        resultDiv.textContent = `${food}을 추천드립니다! 맛있겠쥬? 츄릅`;
    }
});

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomFood(category, spice) {
    const foods = menu[spice][category];
    return getRandomElement(foods);
}

const menu = {
    mild: {
        soup: ['된장찌개', '감자탕', '미역국', '어묵탕', '곰탕', '국밥'],
        rice: ['볶음밥', '김밥', '주먹밥', '카레라이스', '유부초밥', '초밥'],
        bread: ['햄버거', '토스트', '떡국', '떡만둣국'],
        noodle: ['라면', '짜장면', '국수', '냉면', '파스타'],
        fry: ['치킨', '돈까스', '부추전', '튀김만두', '멘보샤']
    },
    spicy: {
        soup: ['김치찌개', '순두부찌개', '마라탕(샹궈)'],
        rice: ['김치복음밥', '제육덮밥', '짬뽕밥'],
        bread: ['피자', '떡꼬치', '떡볶이'],
        noodle: ['라면', '짬뽕', '비빔면'],
        fry: ['칠리새우', '양념치킨', '김치전']
    }
};
