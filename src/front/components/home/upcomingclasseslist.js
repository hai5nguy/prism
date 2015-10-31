var React = require('react');
var Link = require('react-router').Link;


var UpcomingClassTile = require('./upcomingclasstile');

module.exports = React.createClass({
	render: function () {
		var classes = this.props.upcomingClasses;
		var tiles = [];
		for (var i in classes) {
			tiles.push(<UpcomingClassTile key={classes[i].id} details={classes[i]} />);
		}
		return (
			<div id="upcoming-classes-list" className="container">
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-6">
	            		<h4><Link to="/about">Upcoming Classes</Link></h4>
					</div>
				</div>
				<div className="row">
					{tiles}
				</div>
			</div>
		)
	}
});




/*

<div class="container">
    <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6">
            <h4><a href="/classes">Upcoming Classes</a></h4>
        </div>
        <div class="col-md-2 pull-right">
            <select class="form-control input-sm" ng-options="c.name for c in categories" ng-model="selectedCategory"></select>
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 col-sm-6 col-xs-6" ng-repeat="upcomingClass in upcomingClasses | filter: selectedCategory.value | limitTo:6" ui-sref="upcoming.detail({ id: upcomingClass._id })">
            <div class="panel">
                <span class="upcomingCategory"><a href="{{ upcomingClass.catlink }}">{{ upcomingClass.category.name }}</a></span>
                <img src="{{ upcomingClass.category.imageUrl }}" class="img-responsive upcomingImage" alt="Class Title - Category" />
                <span class="upcomingTitle truncate col-md-12 col-sm-12 col-xs-12">{{ upcomingClass.meetup.event.name }}</span>
                <div class="panel-body text-right">
                    <div class="row">
                        <div class="text-left col-md-4 col-sm-6 hidden-xs">
                            <h2><span class="glyphicon glyphicon-ok"></span></h2>
                            <p>RSVP</p>
                        </div>
                        <div class="col-md-8 col-sm-6">
                            <h5>{{ upcomingClass.date }}</h5>
                            <p class="small">{{ upcomingClass.location }}</p>
                            <span class="small badge glyphicon glyphicon-user">14</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="/classes" class="btn btn-default pull-right">See More</a>
</div>




*/

