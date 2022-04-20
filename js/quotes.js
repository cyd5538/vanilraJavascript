const quotes = [
    {
        quote : "여전할 것인가,  역전할 것인가.",
        author : ""
    },
    {
        quote : "많은 사람은 TV 앞에 앉아서,혹은 핸드폰을 만지는 것 이외에는 많은 일에 도전하지 않는다.",
        author : "트리쉬 웨그스테프"
    },
    {
        quote : "길을 걷다가 돌을 보면 약자는 그것을 걸림돌이라고 하고 강자는 그것을 디딤돌이라고 한다",
        author : "토마스 카라일"
    },
    {
        quote : "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다.",
        author : ""
    },
    {
        quote : "자신을 믿어라 자신의 능력을 신뢰하라 겸손하지만 합리적인 자신감 없이는 성공할 수도 행복할 수도 없다",
        author : "노먼 빈센트 필"
    },
    {
        quote : "조금 더 많이 인내하자. 조금 더 많이 노력하자. 그러면 절망적 실패로 보였던 것이 빛나는 성공으로 변할 수 있다",
        author : "Elbert Hubbard"
    },
    {
        quote : "20년 후 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다",
        author : "Elbert Hubbard"
    },
    {
        quote : "먹는 칼로리보다 에너지 소모가 적으면 살이 찌듯이 걱정만 하고 행동하지 않으면 걱정이 찐다",
        author : ""
    },
    {
        quote : "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다",
        author : "메이슨 쿨리"
    },
    {
        quote : "사람들이 동기부여는 오래가지 않는다고 말한다 목욕도 마찬가지이다. 그래서 매일 하라고 하는거다.",
        author : ""
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;