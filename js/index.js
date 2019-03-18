



        $(function () {
            // 菜单栏显示子菜单
            let $li = $(".nav-fl");
            $li.mouseenter(function () {
                $(this).children("ul").show();

            });
            $li.mouseleave(function () {
                $(this).children("ul").hide();
            });
            // 菜单栏显示子菜单

            // banner区域鼠标移入移出，logo显示圆角矩形条

            let $top_li = $(".top-website>ul>li");
            $top_li.mouseenter(function () {
                $(this).children("img").show();
            });
            $top_li.mouseleave(function () {
                $(this).children("img").hide();
            });

            // banner区域鼠标选中，logo显示圆角矩形条

            $top_li.first(0).children("a").addClass("checked");

            $top_li.each(function(){
                $(this).click(function(){
                    $top_li.children("a").removeClass("checked");
                    $(this).children("a").addClass("checked");

                    // banner轮播图切换
                    let idx = $(this).index();
                    $(".article:eq("+idx+")").show().siblings(".article").hide();


                });

            });















        });
