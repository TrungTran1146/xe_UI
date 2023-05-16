import $ from "jquery";

$(document).ready(function () {
  // Accordion
  var all_panels = $(".e_commerce-accordion > li > ul").hide();

  $(".e_commerce-accordion > li > a").click(function () {
    console.log("Hello world!");
    var target = $(this).next();
    if (!target.hasClass("active")) {
      all_panels.removeClass("active").slideUp();
      target.addClass("active").slideDown();
    }
    return false;
  });
  // End accordion

  // Product detail
  $(".product-links-wap a").click(function () {
    var this_src = $(this).children("img").attr("src");
    $("#product-detail").attr("src", this_src);
    return false;
  });
  $("#btn-minus").click(function () {
    var val = $("#product-quanity").html();
    val = val === "1" ? val : val - 1;
    $("#product-quanity").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $("#btn-plus").click(function () {
    var val = $("#product-quanity").html();
    val++;
    $("#product-quanity").html(val);
    $("#product-quanity").val(val);
    return false;
  });
  $(".btn-size").click(function () {
    var this_val = $(this).html();
    $("#product-size").val(this_val);
    $(".btn-size").removeClass("btn-secondary");
    $(".btn-size").addClass("btn-success");
    $(this).removeClass("btn-success");
    $(this).addClass("btn-secondary");
    return false;
  });
  // End roduct detail
});
