function mascara(c,e){v_obj=c,v_fun=e,setTimeout("execmascara()",1)}function mascara_cnpj(c,e){v_obj2=c,v_fun2=e,setTimeout("execmascaracnpj()",1)}function mascara_cpf(c,e){v_obj3=c,v_fun3=e,setTimeout("execmascaracpf()",1)}function execmascara(){v_obj.value=v_fun(v_obj.value)}function execmascaracnpj(){v_obj2.value=v_fun2(v_obj2.value)}function execmascaracpf(){v_obj3.value=v_fun3(v_obj3.value)}function mcpnj(c){return c=(c=c.replace(/\D/g,"")).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5")}function mcpf(c){return c=(c=c.replace(/\D/g,"")).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}function mtel(c){return c=(c=(c=c.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")}function id(c){return document.getElementById(c)}window.onload=function(){id("p11").onkeyup=function(){mascara(this,mtel)},id("p17").onkeyup=function(){mascara_cnpj(this,mcpnj)},id("p18").onkeyup=function(){mascara_cpf(this,mcpf)}};
