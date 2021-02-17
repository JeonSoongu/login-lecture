'use strict'

const content = document.querySelector("#content"),
    smarteditorBtn = document.querySelector("#button");

smarteditorBtn.addEventListener("click", smarteditor);

function smarteditor() {
    if(!contet.value) return alert("내용을 입력해주세요");

    const req = {
        content: content.value,
    };

    fetch("/editor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("내용 저장 중 에러 발생");
    });
}