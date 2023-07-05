<template>
	<view>
		<!-- <view>
			<text selectable>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text space="emsp">唱歌跳舞    打篮球</text>
		</view>
		<view>
			<text decode>唱歌&nbsp;跳舞打篮球</text>
		</view> -->
		
		<view class="box1" hover-class="box1-active">
			<view class="box2" hover-class="box2-activer" hover-stop-propagation :hover-start-time="1000" :hover-stay-time="1000"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.box1{
		width: 200px;
		height: 200px;
		background: #007AFF;
	}
	
	.box2{
		width: 100px;
		height: 100px;
		background: #4CD964;
	}
	
	.box2-activer{
		background-color: #DD524D;
	}
	
	.box1-active{
		background: #333333;
	}
</style>
