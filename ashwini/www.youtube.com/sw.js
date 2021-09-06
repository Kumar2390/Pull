/** 3886329802749037501 */
self.document = self;
self.window = self;
var ytcfg = {
    d: function() {
        return window.yt && yt.config_ || ytcfg.data_ || (ytcfg.data_ = {})
    },
    get: function(k, o) {
        return k in ytcfg.d() ? ytcfg.d()[k] : o
    },
    set: function() {
        var a = arguments;
        if (a.length > 1) ytcfg.d()[a[0]] = a[1];
        else
            for (var k in a[0]) ytcfg.d()[k] = a[0][k]
    }
};
ytcfg.set({
    "EXPERIMENT_FLAGS": {
        "nwl_trigger_throttle_after_reset": true,
        "web_dedupe_ve_grafting": true,
        "enable_gel_log_commands": true,
        "networkless_logging": true,
        "is_mweb_wexit_main_launch": true,
        "nwl_send_fast_on_unload": true,
        "enable_topsoil_wta_for_halftime_live_infra": true,
        "web_forward_command_on_pbj": true,
        "flush_gel": true,
        "ytidb_stop_transaction_commit": true,
        "enable_mixed_direction_formatted_strings": true,
        "suppress_error_204_logging": true,
        "use_document_lifecycles": true,
        "web_api_url": true,
        "polymer_bad_build_labels": true,
        "disable_thumbnail_preloading": true,
        "disable_child_node_auto_formatted_strings": true,
        "pes_migrate_association_data": true,
        "nwl_use_ytidb_partitioning": true,
        "screen_manager_log_servlet_ei": true,
        "web_deprecate_service_ajax_map_dependency": true,
        "trigger_nsm_validation_checks_with_nwl": true,
        "state_machine_dynamic_events_lifecycles": true,
        "disable_simple_mixed_direction_formatted_strings": true,
        "enable_share_panel_page_as_screen_layer": true,
        "enable_client_sli_logging": true,
        "html5_enable_video_overlay_on_inplayer_slot_for_tv": true,
        "kevlar_sw_app_wide_fallback": true,
        "networkless_gel": true,
        "nwl_throttling_race_fix": true,
        "export_networkless_options": true,
        "log_heartbeat_with_lifecycles": true,
        "ytidb_fetch_datasync_ids_for_data_cleanup": true,
        "kevlar_enable_record_notification_interaction_oneplatform_migration": true,
        "use_screen_manager_util": true,
        "pageid_as_header_web": true,
        "sw_nav_request_network_first": true,
        "kevlar_dropdown_fix": true,
        "nwl_sw_health_payloads": true,
        "ytidb_is_supported_cache_success_result": true,
        "log_final_payload": true,
        "html5_pacf_enable_dai": true,
        "kevlar_enable_set_notification_registration_oneplatform_migration": true,
        "use_undefined_csn_any_layer": true,
        "validate_network_status": true,
        "ytidb_analyze_is_supported": true,
        "web_yt_config_context": true,
        "kevlar_gel_error_routing": true,
        "polymer_verifiy_app_state": true,
        "web_enable_ad_signals_in_it_context": true,
        "qoe_send_and_write": true,
        "record_app_crashed_web": true,
        "offline_error_handling": true,
        "enable_auto_play_param_fix_for_masthead_ad": true,
        "allow_skip_networkless": true,
        "enable_nwl_cleaning_logic": true,
        "log_web_endpoint_to_layer": true,
        "vss_final_ping_send_and_write": true,
        "kevlar_enable_convert_endpoint_to_url_oneplatform_migration": true,
        "ytidb_transaction_ended_event_rate_limit": 0.02,
        "addto_ajax_log_warning_fraction": 0.1,
        "log_window_onerror_fraction": 0.1,
        "nwl_cleaning_rate": 0.1,
        "check_navigator_accuracy_timeout_ms": 0,
        "leader_election_renewal_interval": 6000,
        "initial_gel_batch_timeout": 2000,
        "leader_election_check_interval": 9000,
        "html5_experiment_id_label": 0,
        "html5_experiment_id_label_live_infra": 0,
        "network_polling_interval": 30000,
        "web_foreground_heartbeat_interval_ms": 28000,
        "web_logging_max_batch": 150,
        "botguard_async_snapshot_timeout_ms": 3000,
        "leader_election_lease_ttl": 10000,
        "ytidb_transaction_try_count": 3,
        "web_client_version_override": "",
        "cb_v2_uxe": "23983171",
        "web_op_signal_type_banlist": [],
        "kevlar_command_handler_command_banlist": [],
        "web_op_continuation_type_banlist": [],
        "web_op_endpoint_banlist": []
    },
    "INNERTUBE_API_KEY": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    "INNERTUBE_API_VERSION": "v1",
    "INNERTUBE_CLIENT_NAME": "WEB",
    "INNERTUBE_CLIENT_VERSION": "2.20210903.05.01",
    "INNERTUBE_CONTEXT": {
        "client": {
            "clientName": "WEB",
            "clientVersion": "2.20210903.05.01"
        }
    },
    "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
    "INNERTUBE_CONTEXT_CLIENT_VERSION": "2.20210903.05.01",
    "LATEST_ECATCHER_SERVICE_TRACKING_PARAMS": {
        "client.name": "WEB"
    }
});
importScripts('https:\/\/www.youtube.com\/s\/desktop\/4eebcda0\/jsbin\/serviceworker-kevlar-appshell.vflset\/serviceworker-kevlar-appshell.js');