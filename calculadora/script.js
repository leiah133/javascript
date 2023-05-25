function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
      try {
        var expressao = math.evaluate(resultado);
        document.getElementById('resultado').innerHTML = expressao.toString();
      } catch (error) {
        document.getElementById('resultado').innerHTML = 'Erro';
      }
    } else {
      document.getElementById('resultado').innerHTML = 'Nada...';
    }
  }