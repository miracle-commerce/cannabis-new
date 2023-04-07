// Scripts for Product Cart Button
const productInfoCartBtns = $(".product-info-faqs [data-trigger-product-cart-submit]");
console.log(productInfoCartBtns);
if(productInfoCartBtns.length > 0){
    productInfoCartBtns.each(function(){
        var targetCartTrigger = $('#' + $(this).data('target-form-id')).find("[data-add-to-cart-trigger]");

        $(this).on("click", function(){
            targetCartTrigger.trigger("click");
        })
    })
}

// Scripts for Product Faq section
$(".product-faq__heading").on("click", function(){
    $(this).parents(".product-faqs").toggleClass("is-active");
})