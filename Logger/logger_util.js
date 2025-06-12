class LoggerUtil {
	constructor({ prefix = '', show_timestamp = false} = {}) {
		this.prefix                 = prefix;
		this.show_timestamp         = show_timestamp;
		this.ENV                    = import.meta.env;
		this.is_production          = this.ENV?.MODE === "production";
	}

	// Main logger
	_log = (type, color, ...args) => {
		if (this.is_production || type === "log") { return };

		const time      = this.show_timestamp ? `[${new Date().toISOString()}]` : '';
		const prefix    = this.prefix ? `%c[${this.prefix}]` : '';
		const base_style = `color: ${color}; font-weight: bold;`;

		if (prefix) {
			console[type](`${time} ${prefix}`, base_style, ...args);
		} 
        else {
			console[type](`${time}`, ...args);
		}
	};

	log    = (...args) => this._log('log', '#3498db', ...args);      // blue
	info   = (...args) => this._log('info', '#2ecc71', ...args);     // green
	warn   = (...args) => this._log('warn', '#f1c40f', ...args);     // yellow
	error  = (...args) => this._log('error', '#e74c3c', ...args);    // red
	debug  = (...args) => this._log('debug', '#9b59b6', ...args);    // purple
}

export default LoggerUtil