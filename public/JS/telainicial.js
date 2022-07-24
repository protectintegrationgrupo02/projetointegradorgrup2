$(".fadeIn").hide();

$("document").ready(() => {
  console.log("Documento is ready");

  const fadeInList = $(".fadeIn");

  for (let i = 0; i < fadeInList.length; i++) {
    $(`.fadeIn:eq(${i})`)
      .delay(2000 * i)
      .fadeIn(2000);
  }
});