Ext.define('tleaf.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [
		'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
       /* tabBarPosition: 'top',
        items: [ 
            {
                title: 'T.LEAF'     
            }
        ]
        */
	    tabBarPosition: 'bottom',
        items: [
			{
			    title: 'Home',
				iconCls: 'home',
				styleHtmlContent: true,
				scrollable: true,

				items: {
				    docked: 'top',
				    xtype: 'titlebar',
				    title: 'T.LEAF'
			    },

				html: [
                        '<h3 style="text-align:center">Welcome to t.leaf</h3>',
                        "<p>t.leaf is the premier database for tea drinkers.",
                        "This site is designed to give you information about",
                        "your favorite teas, provide flavor profiles and, ",
                        " and even provides a unique blend",
                        "feature which allows you to mix and match to create",
                        "your own custom teas!"
				       ].join("")
			},
            {
			    title: 'Teas',
				iconCls: 'action',

                items: [
                    {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'T.LEAF'
                    },
					/*{
					    xtype: 'video',
						url: '',
						posterUrl: ''
					}*/
                ]
			},
			{
			    title: 'Blender',
				iconCls: 'action',

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'T.LEAF'
                },

			},
			{
			    title: 'Info',
				iconCls: 'action',

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'T.LEAF'
                }, 
			}
        ]
		}
    });
