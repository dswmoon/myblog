/**
 * Created by Administrator on 2016/8/25.
 */
window.onload=function(){
    //�����ֲ�ͼ�Ĺ���
    banner ();
    //�������ʾ
    $('[data-toggle="tooltip"]').tooltip();
    //���ò�Ʒģ�� �������
    productNav();
};
//�ֲ�ͼ�Ĺ���
function banner (){
    //��ȡĿ��Ԫ��
    var bannerBox=document.querySelector(".wjs-banner");
    //��������
    var startX=0;
    var moveX=0;
    var distanceX=0;

    //��touch�¼�
    bannerBox.addEventListener("touchstart",function(e){
        //��ȡ��ʼ����
        startX= e.changedTouches[0].clientX;

    })
    //���ƶ��¼�
    bannerBox.addEventListener("touchmove",function(e){
        moveX= e.changedTouches[0].clientX;
        //��������
        distanceX=moveX-startX;
    })
    //�󶨽����¼�
    bannerBox.addEventListener("touchend",function(){
        if(distanceX>0){
            $(".carousel").carousel("prev");
        }
        if(distanceX<0){
            $(".carousel").carousel("next");
        }
        //��������
        startX=0;
        moveX=0;
        distanceX=0;
    })
}

//��Ʒģ�� �������
function productNav(){
    //��ȡԪ��
    var nav=$(".wjs-nav-tabs");
    //  ��ȡ���е�li��ǩ
    var lis=nav.find("li");
    //����li��ǩ ��¼�ۼ�����
    var w=0;
    $.each(lis,function(index,item){
        w+=$(item).innerWidth();
    })
    //���ۼӵĿ�� ��Ӹ�nav
    nav.width(w);
}





