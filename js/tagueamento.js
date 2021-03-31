// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function (jQuery) {

    jQuery(document).ready(function () {
        // Evento click em Entre em Contato
        jQuery(".menu-lista-contato").on("click", function(){
            gtag('event', 'contato_button', {'event_category': 'menu', 'event_action': 'entre_em_contato', 'event_label': 'link_externo'});       
        })    

        // Evento click em Download PDF
        jQuery(".menu-lista-download").on("click", function(){
            gtag('event', 'download_button', {'event_category': 'menu', 'event_action': 'download_pdf', 'event_label': 'download_pdf'});     
        })    


        // Evento click nos botões Lorem, Ipsum e Dolor.
        jQuery(".card.card-montadoras").on("click", function(){
            var label = jQuery(this).data("name");
            gtag('event', 'popup_buttons', {'event_category': 'analise', 'event_action': 'ver_mais', 'event_label': label});      
        })  

        // Evento preenchimento do campo nome do formulário
        jQuery('form.contato input[type=text], form.contato input[type=email], form.contato input[type=tel]').on( "focusout", function(){
            var fieldId = jQuery(this).attr('id');
            var validation = !jQuery(this).val();
            if ( validation == false)  {
                gtag('event', fieldId, {'event_category': 'contato', 'event_action': fieldId, 'event_label': 'preencheu'});    
            }     
        })

        
        // Evento checkbox do formulario em Contato.
        jQuery("#aceito").on("click", function(){
            gtag('event', 'checkbox_form', {'event_category': 'contato', 'event_action': 'aceito', 'event_label': 'preencheu'});
        })

        // Evento popup de envio de formulário em Contato.
        jQuery("form.contato").on( "submit", function(){
            gtag('event', 'submit_form', {'event_category': 'contato', 'event_action': 'enviado', 'event_label': 'enviado'});    
        })

    });

})(jQuery);