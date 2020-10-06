class Controller{
    constructor(){
        this.posts=new Array();
        this.comments=new Array();
    }
    Create_Card(title, icon_pp, icon_b,button_class, body, tags, a_section){
        $('<div class="card my-2 mx-2 bg-dark text-white" style="width: 18rem;"><div class="card-body"><article><header ><h5 class="card-title">'+title+'<i class="'+icon_pp+' text-white ml-1"></i><button class="btn btn-info '+button_class+' float-right" type="button"><i class="'+icon_b+'"></i></button></h5></header><p class="card-text mt-4">'+body+'</p></article></div><div class="card-footer bg-light"><p class="text-dark">Tag:</p><div id="tag_section"><p class="text-info">'+tags+'</p></div><p class="text-dark">Lascia un commento:<br></p><input type="text" class="form-control mb-2 comment_text" placeholder="Inserisci il commento"><button class="btn btn-info mt-2 comment_button">Invia</button><ul class="list-group comment_section mt-2"></ul></div></div>').appendTo("#"+a_section+"");
    }
    Create_Post(primo_piano, pubblico, tags){
        var punt_p= this.posts[(this.posts.length)-1];
        if(primo_piano === true && pubblico === true){
            this.Create_Card(punt_p.title,"fa fa-trophy", "fa fa-unlock", "button_pub", punt_p.body,punt_p.tags, "article_section_p");
            /*
            $('<div class="card my-2 mx-2 bg-dark text-white" style="width: 18rem;"><div class="card-body"><article><header ><h5 class="card-title">'+this.posts[(this.posts.length)-1].title+'<i class="fa fa-trophy text-white ml-1"></i><button class="btn btn-info button_pub float-right" type="button"><i class="fa fa-unlock"></i></button></h5></header><p class="card-text mt-4">'+this.posts[(this.posts.length)-1].body+'</p></article></div><div class="card-footer bg-light"><p class="text-dark">Tag:</p><div id="tag_section"><p class="text-info">'+this.posts[(this.posts.length)-1].tags+'</p></div><p class="text-dark">Lascia un commento:<br></p><input type="text" class="form-control mb-2 comment_text" placeholder="Inserisci il commento"><button class="btn btn-info mt-2 comment_button">Invia</button><ul class="list-group comment_section mt-2"></ul></div></div>').appendTo("#article_section_p");*/
            
        }
        else if(primo_piano === true && pubblico === false){
            this.Create_Card(punt_p.title,"fa fa-trophy", "fa fa-lock", "button_dra", punt_p.body,punt_p.tags, "article_section_p");
            /*
            $('<div class="card my-2 mx-2 bg-dark text-white" style="width: 18rem;"><div class="card-body"><article><header ><h5 class="card-title">'+this.posts[(this.posts.length)-1].title+'<i class="fa fa-trophy text-white ml-1"></i><button class="btn btn-info button_dra float-right" type="button"><i class="fa fa-lock"></i></button></h5></header><p class="card-text mt-4">'+this.posts[(this.posts.length)-1].body+'</p></article></div><div class="card-footer bg-light"><p class="text-dark">Tag:</p><div id="tag_section"><p class="text-info">'+this.posts[(this.posts.length)-1].tags+'</p></div><p class="text-dark">Lascia un commento:<br></p><input type="text" class="form-control mb-2 comment_text" placeholder="Inserisci il commento"><button class="btn btn-info mt-2 comment_button">Invia</button><ul class="list-group comment_section mt-2"></ul></div></div>').appendTo("#article_section_p");*/    
        }
        else if(primo_piano === false && pubblico === false){
            this.Create_Card(punt_p.title, null, "fa fa-lock", "button_dra", punt_p.body, punt_p.tags, "article_section");
            /*
             $('<div class="card bg-dark my-2 mx-2 text-white" style="width: 18rem;"><div class="card-body"><article><header><h5 class="card-title">'+this.posts[(this.posts.length)-1].title+'<button class="btn btn-info mt-1  button_dra float-right" type="button"><i class="fa fa-lock"></i></button</h5></header><p class="card-text mt-4">'+this.posts[(this.posts.length)-1].body+'</p></article></div><div class="card-footer bg-light"><p class="text-dark">Tag:</p><div id="tag_section"><p class="text-info">'+this.posts[(this.posts.length)-1].tags+'</p></div><p class="text-dark">Lascia un commento:<br></p><input type="text" class="form-control mb-2 comment_text" placeholder="Inserisci il commento"><button class="btn btn-info mt-2 comment_button">Invia</button><ul class="list-group comment_section mt-2" style="background-color: cadetblue"></ul></div></div>').appendTo("#article_section");*/   
        }
        else{
            this.Create_Card(punt_p.title, null, "fa fa-unlock", "button_pub", punt_p.body, punt_p.tags, "article_section");
            /*
            $('<div class="card bg-dark my-2 mx-2 text-white" style="width: 18rem;"><div class="card-body"><article><header><h5 class="card-title">'+this.posts[(this.posts.length)-1].title+'<button class="btn btn-info mt-1  button_pub float-right" type="button"><i class="fa fa-unlock"></i></button</h5></header><p class="card-text mt-4">'+this.posts[(this.posts.length)-1].body+'</p></article></div><div class="card-footer bg-light"><p class="text-dark">Tag:</p><div id="tag_section"><p class="text-info">'+this.posts[(this.posts.length)-1].tags+'</p></div><p class="text-dark">Lascia un commento:<br></p><input type="text" class="form-control mb-2 comment_text" placeholder="Inserisci il commento"><button class="btn btn-info mt-2 comment_button">Invia</button><ul class="list-group comment_section mt-2" style="background-color: cadetblue"></ul></div></div>').appendTo("#article_section");*/
        }
    }
    Insert_Post(titolo, corpo, primo_piano, pubblico, tags){
        var Post_n= new Post(titolo, corpo, tags);
        this.posts.push(Post_n);
        this.Create_Post(primo_piano, pubblico, tags);
    }
    Button_draft_public(punt, old_class, new_class, icon_name){
        $(punt).removeClass(old_class);
        $(punt).addClass(new_class);
        $(punt).html('<i class="'+icon_name+'"></i>');
    }
    save_Post(){
        var title= $('#recipient-title').val();
        var body=$('#text-body').val();
        if($('#customRadio1').is(":checked")){
            if($('#customRadio3').is(":checked")){
                console.log("true, true");
                this.Insert_Post(title, body, true, true);
            }else{
                console.log("true, false");
                this.Insert_Post(title, body, true, false);
            }
        }else{
            if($('#customRadio3').is(":checked")){
                console.log("false, true");
                this.Insert_Post(title, body, false, true);
            }else{
                console.log("false, false");
                this.Insert_Post(title, body, false, false);
            }
            
        }
    }
    reset_modal(){
        $('#recipient-title').val("");
        $('#text-body').val("");
        $('#customRadio1').prop('checked', false);
        $('#customRadio2').prop('checked', false);
        $('#customRadio3').prop('checked', false);
        $('#modal_insert').modal('hide');
    }
    insert_Comment(punt){
        var text_com=$(punt.children('.comment_text')).val();
        var comm=new Comment(text_com);
        this.comments.push(comm);
        $(punt.children('.comment_text')).val("");
        $(punt.children('.comment_section')).append('<li class="list-group-item bg-info">Utente scrive: '+this.comments[(this.comments.length)-1].text_comment+'</li>');
    }
    init_post(risposta){
        console.log(risposta);
        for(var i=0;i<risposta.length;i++){
                 this.Insert_Post(risposta[i].title, risposta[i].body, risposta[i].featured, risposta[i].public, risposta[i].tag);
                console.log(risposta[i].tag);
        }
    }
}
$(document).ready(function(){
    controller=new Controller();
    $.ajax({
               url: 'https://api.npoint.io/24620ef625c768a4f3c4',
               method: 'GET',
               success: function(risposta){
                    controller.init_post(risposta);
               },
               error: function(){
                console.log("errore");
           }
     });
    $('#send_article').click(function(){
        
        controller.save_Post();
        controller.reset_modal();
    });
})
$(document).on('click', '.button_pub', function(){
    var punt= this;
    controller.Button_draft_public(punt, "button_pub", "button_dra", "fa fa-lock");
});
$(document).on('click', '.button_dra', function(){
    var punt= this;
    controller.Button_draft_public(punt, "button_dra", "button_pub", "fa fa-unlock");
});
$(document).on('click', '.comment_button', function(){
    var punt= $(this).parent();
    controller.insert_Comment(punt);
});
