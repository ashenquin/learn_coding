(function(){
    $.ajax({
      url: '/test.json',
      type: 'GET',
      success: function(res){
        // console.log(res)
        for (let n of res.data.lists) {
          $('#lesson').append(`<li class="span4 mix">
          <div class="thumbnail">
            <a href="#" title="${n.title}">
              <div class="p20" style="background: ${n.bgc}">
                <img src="${n.imgUrl}" alt="">
              </div>
              <div>
                <h3>电商小程序案例</h3>
                <p>开发支持多端运行的电商应用。</p>
              </div>
            </a>
            <div class="meta">
              <span>2019-04-08</span>
              <span class="pull-right">2 小时 30 分</span>
            </div>
          </div>
        </li>`)
        }
        
      }
    })
  })()
  