

$.get('https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json',function(data){
var html='<option data-tokens="selecione">Selecione o estado</option>';
    var estados = JSON.parse(data).estados;
    $.each(estados,function(index){
    html += '<option data-tokens="'+this.sigla+'" value="'+index+'">'+this.nome+'</option>';
    });
    $('[name="estado"]').html(html).selectpicker('refresh');
    $('[name="estado"]').change(function(){
      var htmlCidades ='<option data-tokens="selecione">Selecione a cidade</option>';
      $.each(estados[$(this).val()].cidades,function(index){
      htmlCidades += '<option data-tokens="'+this+'" value="'+this+'">'+this+'</option>';
      });
      $('[name="cidade"]').html(htmlCidades).selectpicker('refresh');
    });

  });
