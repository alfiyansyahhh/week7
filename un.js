let mtk = Number (90)
let bIndonesia =  Number (90)
let bInggris =  Number (90)
let ipa =  Number (90)

if (mtk !== "" && bIndonesia !=="" && bInggris !=="" && ipa !=="") {
    
    let total = mtk + bIndonesia + bInggris + ipa
    let rata2 = total/4
    let tampil = "Rata-rata" + ' = '+ rata2
    console.log(tampil)

    if (rata2 >= 90 && rata2 <= 100) {
    console.log("Grade = A")
    } else if (rata2 >= 80 && rata2 < 89) {
    console.log("Grade = B")
    } else if (rata2 >= 70 && rata2 < 79) {
    console.log("Grade = C")
    } else if (rata2 >= 60 && rata2 < 69) {
    console.log("Grade = D")
    } else {
    console.log("Grade = E")
    }
  
  }
  
  else {
    console.log('NILAI HARUS DI ISI!')

}














// let NilaiMtk ; Number (90)
// let NilaiBindonesia ;  Number (90)
// let NilaiBinggris ;  Number (90)
// let NilaiIpa ;  Number (90)



// function nilaiRata2( a , b, c, d) {
//   let total = a + b + c + d
//   let rata2 = total/4
//   let tampil = "Rata-rata" + ' = '+ rata2  

//   return tampil;
// }

// (nilaiRata2(90,90,90,90))





  
    
