
// BR - pt-br
let twoSum = function(nums, target) {
    // cria um obejto (map)
    const map = {};
    // loop para percorrer o array
    for (let i = 0; i < nums.length; i++) {
      //adiciona a diferença do target com o valor nums[i]. para descobrir quanto que falta para chegar em target
      const complement = target - nums[i];
       // verifica se algum valor que esta no map somando com i resulta em target  
      if (complement in map) {
        // fim do codigo enviando os indices dentro de um array
        return [Number(map[complement]), i];
      }
      // adiciona o valor do nums[i] do valor com seu indice dentro de nums
      map[nums[i]] = i;
    }
  
    return [];
};

/*
    
Este código resolve o problema "Two Sum" da melhor forma possivel usando um objeto (map) para armazenar os números já percorridos e seus respectivos índices.
Exemplo: 
array = [2, 3, 4, 5]
{
    '2': 0
}
valor do map apos adicionar o indice '0' com o valor '2'.

A funçao quer saber onde estao os dois valores dentro da array que somado da target [9].
🔍 Como funciona:

A função percorre o array nums.

Para cada número, calcula o complemento (complement) necessário para atingir o target ou seja, (target - nums[i]).

Verifica se esse complemento já foi armazenado no map.

Se sim, retorna os índices: o do complemento (já visto) e o índice atual.

Caso contrário, armazena o número atual no map, com seu índice.

✅ Isso garante que cada número seja analisado apenas uma vez — o que torna a solução O(n) em complexidade de tempo.


*/
// EN - English
/*

This code solves the classic "Two Sum" problem efficiently using a hash map (object) to store already visited numbers and their respective indices.

Example:
array = [2, 3, 4, 5]
map after first iteration:
{
    '2': 0
}

The function's goal is to find the indices of the two numbers in the array that sum up to the given target (e.g., 9).

🔍 How it works:

1. The function iterates through the array `nums`.
2. For each number, it calculates the `complement` (i.e., `target - nums[i]`).
3. It checks if this complement is already in the `map`.
   - If it is, it returns the indices: the index of the complement (already seen) and the current index.
   - If not, it stores the current number and its index in the map.
4. If no solution is found during the loop, it returns an empty array.

✅ This approach ensures each number is processed only once, making the solution time-efficient with **O(n)** time complexity.

*/


