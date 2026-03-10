function recheck() {
    let petcount = document.forms["adoptme"]["petcount"] ;
    let check = document.getElementById("agree") ;
    if(petcount.value < 0 || petcount.value > 100) {
        alert("จำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบันต้องเป็นตัวเลข ค่าระหว่าง 0 ถึง 100 เท่านั้น") ;
        return false ;
    }
    
    if(!check.checked) {
        alert("กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข")
        return false ;
    }
    return true ;
}