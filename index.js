function get_text() {
    const text = document.getElementById('text').value;
    
    if(text === ""){
        alert('입력란이 비었습니다.');
        return;
    }

    url = "http://10.80.161.143:5000/tts-server/api/infer-glowtts?text=" + text;
    document.getElementById('audio').src = url;
}

