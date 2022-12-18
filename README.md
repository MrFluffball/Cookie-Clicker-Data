# Cookie clicker data reference

Data.js has a list of all the upgrades/achievements in cookie clicker. If you want to use it for anything, no credit is needed.


## Getting data

Ex:
```js
upgrades["Santa's dominion"].icon // [19, 10]
achievements["Cookie quasar"].desc // Bake <b>100000000 cookies</b> per second.
```

## Process

If for some reason you wanted to get any of this data for yourself, it's incredibly simple. All it really involves is grabbing the list of upgrades and achievements directly from https://orteil.dashnet.org/cookieclicker/

```js
// copy into console 
// (builds a list of upgrades, but only the most important parts)
let fetchedUpgrades = {}
Object.values(Game.Upgrades).forEach(upgrade => {
	fetchedUpgrades[upgrade.name] = {
		id: upgrade.id,
		name: upgrade.name,
		desc: upgrade.desc,
		price: upgrade.basePrice,
		icon: upgrade.icon,
		pool: upgrade.pool,
		tier: upgrade.tier,
		order: upgrade.order
	}
})

// to log it:

Object.values(fetchedUpgrades).forEach(upgrade => { 
	console.log("\"" + upgrade.name + "\" : " + JSON.stringify(upgrade));
})

```
Similar story for achievements, just need to change some code around

```js
let fetchedAchievements = {}
Object.values(Game.Achievements).forEach(achievement => {
	fetchedAchievements[achievement.name] = {
		id: achievement.id,
		name: achievement.name,
		desc: achievement.desc,
		icon: achievement.icon,
		pool: achievement.pool,
		tier: achievement.tier,
		order: achievement.order
	}
})
```

And that's it! Go make some cool stuff without needing to sift through thousands of lines of cookie clicker's source code.