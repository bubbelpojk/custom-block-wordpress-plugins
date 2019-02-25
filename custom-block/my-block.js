wp.blocks.registerBlockType('zack/avatar-contact', {
    title: 'Avatar Contact',
    icon: 'universal-access',
    category: 'common', 
    attributes: {
        name: {
            name: {type: 'string'},
        }, 

        content: {
            content: {type: 'string'},
        },
        
        link: {
            link: {type: 'string'},
        },
        
        showPicture: {
            showPicture: {type: 'string'}
        }
        
    },
    edit: function(props){
        function updateName(event){
            props.setAttributes({name: event.target.value})
        }
        function updateContent(event){
            props.setAttributes({content: event.target.value})
        }
        function updateLink(event){
            props.setAttributes({link: event.target.value})
        }
        function updatePicture(event){
            props.setAttributes({picture: event.target.value});
        }
        function generatePicture(){
            let el = document.getElementById('imgsrc');
            let img = el.value;
            props.setAttributes({showPicture: img});
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h5", null, "Name"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.name,
              onChange: updateName
            }),
            wp.element.createElement("h5", null, "Description"),
            wp.element.createElement("textarea", {
              type: "text",
              value: props.attributes.content,
              onChange: updateContent
            }),
            wp.element.createElement("h5", null, "Link"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.link,
              onChange: updateLink
            }),
            wp.element.createElement("h5", null, "Picture URL"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.showPicture,
              onChange: updatePicture,
              id: "imgsrc"
            }),
            wp.element.createElement(
                "button",
                {
                  type: "button",
                  value: props.attributes.showPicture,
                  onClick: generatePicture,
                  id: "img"
                },
                "Update"
              )
        );
        
            
    },
    save: function(props){
        return wp.element.createElement(
            "div", 
            {
                class: "col-md-8, col-lg-8, col-xl-9, order-2, order-md-1"
            },
            wp.element.createElement(
                "div", 
                {
                    class: "card"
                },
                wp.element.createElement(
                    "div", 
                    {
                        class: "card-body"
                    },
                    wp.element.createElement(
                        "div", 
                        {
                            class: "row, justify-content-center"
                        },
                        wp.element.createElement(
                            "div", 
                            {
                                class: "col-12, col-md-11, col-xl-10"
                            },
                            wp.element.createElement(
                                "h3", 
                                null, 
                                props.attributes.name
                                ),
                                wp.element.createElement(
                                    "div",
                                    {
                                        class: "custom-row"
                                    },
                                    wp.element.createElement(
                                        "div",
                                        {
                                            class: "wp-block-image"
                                        },
                                        wp.element.createElement(
                                            "img", 
                                            {
                                                src: props.attributes.showPicture
                                            }
                                        ),
                                    ),
                                    wp.element.createElement(
                                      "div",
                                      {
                                        class: "column, custom-block-avatar",
                                      },
                                      wp.element.createElement("p", null, props.attributes.content),
                                      wp.element.createElement("a", {href: "#"}, props.attributes.link)
                                    )
                                )

                        )
        
                    )
    
                )

            )

        )
               
    }
})