(()=>{"use strict";(async function(r){try{const r=await fetch("http://api.weatherapi.com/v1/forecast.json?key=6f3394a19a3a46478a301618240706&q=New York&days=5"),e=await r.json();if(!r.ok)switch(console.log(e),!0){case 1002===e.error.code:case 1003===e.error.code:case 1005===e.error.code:case 1006===e.error.code:case 2006===e.error.code:case 2007===e.error.code:case 2008===e.error.code:case 2009===e.error.code:case 9e3===e.error.code:case 9001===e.error.code:case 9999===e.error.code:throw new Error(`Error ${e.error.code} : ${e.error.message}`);default:throw new Error("Unknown error")}return e}catch(r){console.error(r)}})().then((r=>{console.log(r);const e=document.createElement("img");e.src=r.current.condition.icon,document.querySelector("body").appendChild(e)})).catch((r=>console.error("Error outside",r)))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJvQkFJT0EsZUFBdUJDLEdBQzVCLElBQ0UsTUFBTUMsUUFBaUJDLE1BQ3JCLG1HQUVJQyxRQUFhRixFQUFTRyxPQUM1QixJQUFLSCxFQUFTSSxHQUVaLE9BREFDLFFBQVFDLElBQUlKLElBQ0osR0FDTixLQUF5QixPQUFwQkEsRUFBS0ssTUFBTUMsS0FHaEIsS0FBeUIsT0FBcEJOLEVBQUtLLE1BQU1DLEtBR2hCLEtBQXlCLE9BQXBCTixFQUFLSyxNQUFNQyxLQUdoQixLQUF5QixPQUFwQk4sRUFBS0ssTUFBTUMsS0FHaEIsS0FBeUIsT0FBcEJOLEVBQUtLLE1BQU1DLEtBR2hCLEtBQXlCLE9BQXBCTixFQUFLSyxNQUFNQyxLQUdoQixLQUF5QixPQUFwQk4sRUFBS0ssTUFBTUMsS0FHaEIsS0FBeUIsT0FBcEJOLEVBQUtLLE1BQU1DLEtBR2hCLEtBQXlCLE1BQXBCTixFQUFLSyxNQUFNQyxLQUdoQixLQUF5QixPQUFwQk4sRUFBS0ssTUFBTUMsS0FHaEIsS0FBeUIsT0FBcEJOLEVBQUtLLE1BQU1DLEtBQ2QsTUFBTSxJQUFJQyxNQUFNLFNBQVNQLEVBQUtLLE1BQU1DLFVBQVVOLEVBQUtLLE1BQU1HLFdBRTNELFFBQ0UsTUFBTSxJQUFJRCxNQUFNLGlCQUd0QixPQUFPUCxDQUNULENBQUUsTUFBT0ssR0FDUEYsUUFBUUUsTUFBTUEsRUFDaEIsQ0FDRixFQ3BEQUksR0FDR0MsTUFBTVYsSUFDTEcsUUFBUUMsSUFBSUosR0FDWixNQUFNVyxFQUFNQyxTQUFTQyxjQUFjLE9BQ25DRixFQUFJRyxJQUFNZCxFQUFLZSxRQUFRQyxVQUFVQyxLQUNwQkwsU0FBU00sY0FBYyxRQUMvQkMsWUFBWVIsRUFBSSxJQUV0QlMsT0FBT0MsR0FBUWxCLFFBQVFFLE1BQU0sZ0JBQWlCZ0IsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gJzZmMzM5NGExOWEzYTQ2NDc4YTMwMTYxODI0MDcwNic7XG4vLyBBUEkgS2V5IHNob3VsZCBhbHdheXMgYmUgc2VjdXJlZCBhbmQgbmV2ZXIgdG8gYmUgZXhwb3NlZCB0byB0aGUgcHVibGljLiBIb3dldmVyIGZvciB0aGUgcHVycG9zZSBvZiBjcmVhdGluZyB0aGlzIGFwcGxpY2F0aW9uLCB0aGVyZSBzaG91bGQgYmUgbm8gaGFybSB0byBleHBvc2UgdGhlIGtleSBhdCB0aGUgY2xpZW50IHNpZWQgZHVlIHRvIHRoZSBuYXR1cmUgb2YgdGhlIGtleSBiZWluZyBmcmVlIHRvIHRoZSBwdWJsaWMuXG5jb25zdCB1cmwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtjaXR5fSZkYXlzPTVgXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAxMDAyOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAxMDAzOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAxMDA1OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAxMDA2OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAyMDA2OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAyMDA3OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAyMDA4OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSAyMDA5OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSA5MDAwOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSA5MDAxOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGF0YS5lcnJvci5jb2RlID09PSA5OTk5OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgJHtkYXRhLmVycm9yLmNvZGV9IDogJHtkYXRhLmVycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVycm9yJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoJztcblxuZ2V0RGF0YSgnTmV3IFlvcmsnKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGltZyk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBvdXRzaWRlJywgZXJyKSk7XG5cbmZ1bmN0aW9uIHJlbmRlckRhdGEoZGF0YSkge31cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKCkge31cbiJdLCJuYW1lcyI6WyJhc3luYyIsImNpdHkiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvZGUiLCJFcnJvciIsIm1lc3NhZ2UiLCJnZXREYXRhIiwidGhlbiIsImltZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9