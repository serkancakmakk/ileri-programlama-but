function knapsack(items, capacity){
// item ve kapasite tanımlanır.
    var memo = [];

    for (var i = 0; i < items.length; i++) {
        // i 0 veya item uzunluğundan küçükse i'yi arttırız.
        var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i,cap));
      }
      memo.push(row);
      //kapasite 1 e eşit veya kapasiteden küçük veya eşitse kapasite arttırılır.
    }
  
    
    return(getLast());
  
    function getLast(){
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
      // son satır memo dizininin uzunluğunun - 1 ne eşitse son satır geri döndürülür.
    }
  
    function getSolution(row,cap){
      const NO_SOLUTION = {maxValue:0, subset:[]};
      // sutün numarası sıfırdan başlar
      var col = cap - 1;
      var lastItem = items[row];
      // alt problemin çözülmesi için kalan kapasite 
      var remaining = cap - lastItem.w;
        // kalan, kapasite - son itemin uzunluğuna eşitleriz    
      var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
      if(remaining < 0){
        return lastSolution;
        // eğer kalan  0 dan küçükse son çözüm döndürülür.
      }
      var lastValue = lastSolution.maxValue;
      var lastSubValue = lastSubSolution.maxValue;
      // son değer son çözümdeki maximum değere eşitleriz.
      // son alt değeri son alt çözümdeki maximum değere eşitleriz.
  
      var newValue = lastSubValue + lastItem.v;
      if(newValue >= lastValue){
        var _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);
        return {maxValue: newValue, subset:_lastSubSet};
      }else{
        return lastSolution;
        //yeni değer "son alt değer + son item değeri"ne eşitlenir
        // eğer yeni değer son değere eşit veya büyükse
        // son altkümeye son alt çözümden yeni elemanlar alının son alt kümeden son item dizine eklenir.
        // değilse son çözüm döndürülür. 
      }
    }
  }
  
  // 
  var items = [
    {w:25,v:62},
    {w:37,v:59},
    {w:77,v:149},
    {w:36,v:85},
    {w:82,v:156},
    {w:87,v:163},
    {w:90,v:173},
    {w:49,v:38},
    {w:85,v:92},
    {w:10,v:25},
    {w:11,v:21},
    {w:13,v:14},
    {w:115,v:221},
    {w:81,v:198},
    {w:99,v:210},
  ];
  
  var capacity = 750;
  console.log(knapsack(items, capacity));